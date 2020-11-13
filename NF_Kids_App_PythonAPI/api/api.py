#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: stereopickle / Eunjoo Byeon

"""

from flask import Flask, request, jsonify
#from flask_restful import Resource, Api
#from sqlalchemy import create_engine

import joblib
import traceback
import pandas as pd

from scripts import preprocess, identify_symptom, return_symptom_id
from scripts import high_corr_target, return_names


"""
## retrieving necessary data from the database  
When we actively send update back to database, we need to call

1. id, name from symptoms table
2. full symptom_relations table

For now, I'll directly call the files.

"""

"""
db_connect = create_engine('DATABASE LOCATION')

class Symptoms(Resource):
    def get(self):
        conn = db_connect.connect()
        q = conn.execute("SELECT id, name FROM symptoms;")
        result = {'data': [dict(zip(tuple (q.keys()) ,i)) for i in q.cursor]}
        return jsonify(result)

class Symptoms_Relation(Resource):
    def get(self):
        conn = db_connect.connect()
        q = conn.execute("SELECT * FROM symptoms_relation;")
        result = {'data': [dict(zip(tuple (q.keys()) ,i)) for i in q.cursor]}
        return jsonify(result)
"""


# defining api
app = Flask(__name__)
app.config["DEBUG"] = True




"""
/logresult takes the text, figures out what NF1 related symptoms are present
then return these symptoms and highly correlated potential conditions.

For the prototype, we won't send the extracted symptoms back to database
Instead we will just output the symptom and target condition
to the front-end.
    
"""

@app.route('/logresult', methods = ['POST'])
def logresult():
    if model: 
        try: 
            input_ = request.json
            text = input_[0]['log']
            #text_input = preprocess(text)
            result = identify_symptom(text, symptom_vectors, model)
            result_symptom_id = return_symptom_id(result, Symptoms)
            target = high_corr_target(result_symptom_id, 
                                      Symptoms_Relation)
            output = return_names(target, Symptoms)
            
            return jsonify({ 'estimated_symptoms': result, 'targets': output })
        
        except:
            return jsonify({'trace': traceback.format_exc()})
    else: 
        return ('No Model Found')


if __name__ == '__main__':
  
    # load data
    Symptoms_Relation = pd.read_csv('../data/symptom_relations.csv', index_col= 0)
    print('Symptoms_Relation loaded')
    
    Symptoms = pd.read_csv('../data/keys.csv', index_col= 0)
    print('Symptoms loaded')

    symptom_names = Symptoms.symptom.values
      
    
    # load model
    model = joblib.load('../model/model.pkl')
    print('model loaded')
    
    # load symptom vectors
    symptom_vectors = joblib.load('../model/symptom_vectors.pkl')
    print('symptom_vectors loaded')

    app.run()

