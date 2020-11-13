# NF_Kids_App_PythonAPI
 

## Text Log Classifier Model
There are many different ways NF1 symptoms may develop into further problems.    
We intend to build a NLP model that outputs potential complications based on text log, so the parents and guardians of children can be informed when observing the child with NF1.   

## Prototype
   
For the prototype purpose, we are not training model on the fly. So currently it's calling models directly from the local directory (but scripts to run these are in scripts.py)   

For this prototype purpose, directory structure is as below...   

```bash
├── 001.EDA.ipynb (explains the overall model building process)
├── README.md
├── api
│   ├── api.py (contains python api)   
│   └── scripts.py (contains all processing functions)   
├── data
│   ├── keys.csv (in db: symptoms table)   
│   └── symptom_relations.csv (in db: symptoms_relation table)   
└── model
    ├── model.pkl (pickled model)   
    └── symptom_vectors.pkl (pickled average word vectors for symptoms)   
```
