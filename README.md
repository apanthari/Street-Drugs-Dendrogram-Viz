# Hierarchical Edge Bundling Viz Project

#### This project is part of my 2024 Summer Practicum Project at the UNC Injury & Prevention Center (mentored by Dr. Nab Dasgupta)

### **`About the Data`**
##### Data is pulled from UNC Street Drug Analysis Lab's drug checking samples and in-house chemical dictionary. 
##### Chemicals were categorized into 6 mains groups (opioid, sedative, cannabinoid, stimulant, psychdelic, & other).
##### Data was last updated July 2024. 

### **`About the Viz`**
##### Our goal was to create an eye catching visualization that drew people into the conversation of harm reduction with the drug use space. 

### **`File Breakdown`**

##### **`csvtojson.ipynb`** pulls performs data wrangling to bring together the chemical dictionary (housed in smartsheet) and the lab samples. This file creates the file_df_syn.json which is then called in our button_category.html file. 

##### **`file_df_syn.json`** is a data file that contains:
        "name" (format of substance.[substance category].[substance name])
        "size" (number of times it occurs with another substance in all the samples combined)
        "imports" (contains a list of all the co-occuring substances found with substance from name)

##### **`button_category.html`** creates the dendrogram using D3.js, HTML and CSS, by pulling data from the fil_df_syn.json. It converts the data into a hierarchical nature, sets the color, and sizing the visualization. 







