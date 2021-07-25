#!/usr/bin/env python
# coding: utf-8

# In[9]:


# Imports Pandas

import pandas as pd

# Read CSV FILE

df = pd.read_csv('./dataset/android-games.csv')


# In[21]:

# Inspect CSV for duplicates. And if duplicate is found delete it.
df.drop_duplicates(keep=False,inplace=True)

# Drop uncessary Fields and returns a cleaned DataFrame
cleanedData = df.drop(columns=['total ratings','growth (30 days)','growth (60 days)','5 star ratings','4 star ratings','3 star ratings','2 star ratings','1 star ratings','paid'])


# In[22]:


# returns JSON file with the first 500 records
cleanedData.head(50).to_json('.\json/android-games.json')

# %%
