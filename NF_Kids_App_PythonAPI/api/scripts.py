#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: stereopickle / Eunjoo Byeon

"""

import pandas as pd
import numpy as np
import joblib


"""
* NLP Preprocessing *
Below scripts preprocess text data then return text tokens

"""

from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.stem import WordNetLemmatizer

def remove_punctuations(text, punctuations = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~�0123456789'):
    ''' remove punctuations '''
    table_ = str.maketrans('', '', punctuations)
    return text.translate(table_)

def ascii_only(text):
    ''' remove non-ascii words '''
    return text.encode("ascii", "ignore").decode()

def lemmatize(word):
    ''' lemmatize text'''
    wnl = WordNetLemmatizer()
    return wnl.lemmatize(word)

def preprocess(text, sw = ['i', 'me', 'my', 'myself', 'we', 'our',
                         'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your',
                         'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she',
                         "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them',
                         'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll",
                         'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have',
                         'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but',
                         'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about',
                         'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above',
                         'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again',
                         'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all',
                         'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such',
                         'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
                         's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now',
                         'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't",
                         'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven',
                         "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't",
                         'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn',
                         "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't", 'felt', 'feel', 'feels']):
    '''
    Takes a text as an input
    Preprocess (remove punctuations, turn lower case, lemmatize, remove stop words)
    Return a nested array with a tokens per sentence
    '''
    if isinstance(text, str):
        text = ascii_only(text.lower())

        text_tokens = []
        for sentence in sent_tokenize(text): 
            sentence = remove_punctuations(sentence)
            tokens = word_tokenize(sentence)
            text_tokens.append([lemmatize(word) for word in tokens if word not in sw])
        return text_tokens
    else: 
        return 'no input'
    
"""
** Word2Vec Training **
Trains (not yet implemented in the prototype) the vector space
(Currently it loads pre-trained GloVe model)

"""

from gensim.models import Word2Vec

def train_model():
        
    try: 
        model = Word2Vec.load("model/word2vec_norm.model")
        print('loading existing model')

    except:
        print('downloading model for the first time (may take a while) ...')
        from gensim import downloader
        model = downloader.load('glove-wiki-gigaword-300')
        model.init_sims(replace=True) # normalize
        model.save("model/word2vec_norm.model")
    print('loading complete')
    return model


"""
** Get Word2Vec Vectors **
Functions to retrieve vectors

"""
def get_avg_vectors(text, model):
    if isinstance(text, str):
        text_input = preprocess(text)
    else: 
        text_input = text.copy()
    avg_vec = []
    for sentence in text_input:
        vectors = []
        for word in sentence:
            try:
                vectors.append(model[word])
            except KeyError:
                print(f'{word} not exists')
                pass
        avg = np.average(vectors, axis = 0)
        avg_vec.append(avg)
    return avg_vec

"""
** Process Symptom Vectors ***
Get symptom vectors and save 
"""

"""
## To-Do: load symptoms table 
symptom_vectors = get_avg_vectors('. '.join(symptoms), model)
symptom_vectors = dict(zip(symptoms, symptom_vectors))

# dumping symptom vectors somewhere
joblib.dump(symptom_vectors, 'symptom_vectors.pkl')
"""



"""
** Symptom Extractor ** 
Finally it will run everything and retrieve symptoms

"""

from scipy.spatial.distance import cosine

def identify_symptom(text, symptom_vectors, model, threshold = 0.5):
    '''
    Find the closest symptom per sentences
    '''
    avg_vec = get_avg_vectors(text, model)
    pred_symptoms = {}

    for sent_vec in avg_vec: 
        
        # for each sentence
        max_ = threshold

        for symptom, sym_vec in symptom_vectors.items():
            similarity =  1 - cosine(sent_vec, sym_vec)
            if similarity > max_:

                max_ = similarity
                max_symptom = symptom
        if max_ > threshold:
            try: 
                # if symptom already exists, update if similarity is higher
                if max_ > pred_symptoms[max_symptom] : 
                    pred_symptoms[max_symptom] = max_

            except: 
                # add symptom if it does not exist
                pred_symptoms[max_symptom] = max_
    return [k for k, v in sorted(pred_symptoms.items(), key = lambda item: item[1])]        


"""
Helpers to communicate back and forth between 
symptom name and id
"""

def return_symptom_id(symptom_list, keys):
    return [keys[keys.symptom == x].index[0] for x in symptom_list]

def return_names(list_of_ids, keys):
    return [keys.iloc[i].symptom for i in list_of_ids]


""" 
** Suggest target Condition ***
Given ids of symptoms, return target
"""

def high_corr_target(result_symptom_id, symptom_relations_table, threshold = 0.25):
    ''' given symptoms and symptom relations table find the target conditions'''
    targets = []
    table_ = symptom_relations_table[~symptom_relations_table['target_id'].isin(result_symptom_id)]
    for ind in result_symptom_id: 
        high_target = table_[table_.symptom_id == ind].sort_values('phi_correlation', ascending = False).iloc[1]
        if high_target.phi_correlation > threshold: 
            targets.append(int(high_target.target_id))
    return set(targets)











