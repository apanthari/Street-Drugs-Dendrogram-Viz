# **`Hierarchical Edge Bundling Viz Project`**

#### This project is part of my 2024 Summer Practicum Project at the UNC Injury & Prevention Center (mentored by Dr. Nab Dasgupta)

## **`About the Data`**

#### Data is pulled from UNC Street Drug Analysis Lab's drug checking samples and in-house chemical dictionary.
#### Data was last updated July 2024. 

#### Substances were categorized into 7 mains groups:

- ![#AB72E4](https://placehold.co/15x15/AB72E4/AB72E4.png) `opioid`
- ![#E29EF5](https://placehold.co/15x15/E29EF5/E29EF5.png) `sedative`
- ![#6CAB6C](https://placehold.co/15x15/6CAB6C/6CAB6C.png) `cannabinoids`
- ![#EA6C7F](https://placehold.co/15x15/EA6C7F/EA6C7F.png) `stimulants`
- ![#E28E18](https://placehold.co/15x15/E28E18/E28E18.png) `psychedelics`
- ![#ee2824](https://placehold.co/15x15/ee2824/ee2824.png) `steriods`
- ![#7D7D7D](https://placehold.co/15x15/7D7D7D/7D7D7D.png) `other`


#### Each visualization represents substances that were found only with that given category
![alt text](https://github.com/apanthari/Street-Drugs-Dendrogram-Viz/blob/main/static_photos/opioids.png)

<p align="center">
Opioid visualization, found in static_photos folder or if button_category.html is run
</p>

## **`About the Viz`**
#### Our goal was to create an eye catching visualization that drew community members, researchers and the general public into the conversation of harm reduction within the drug use space. 

## **`File Breakdown`**

##### **`csvtojson.ipynb`** performs data wrangling to bring together the chemical dictionary (housed in smartsheet) and the lab samples. This file creates the file_df_syn.json which is then called in our button_category.html file. 

##### **`file_df_syn.json`** is a data file that contains:
        "name" (format of substance.[substance category].[substance name])
        "size" (number of times it occurs with another substance in all the samples combined)
        "imports" (contains a list of all the co-occuring substances found with substance from name)

##### **`button_category.html`** creates the dendrogram using D3.js, HTML and CSS, by pulling data from the fil_df_syn.json. It converts the data into a hierarchical nature, sets the colors, and sizing of the visualization. 
##### **`static_photos`** folder contains screenshots of each category of visualization. This does not contain the steriod category as it is not big enough to have it's own viz.
##### **`archived_files`** folder contain old files that will not display any visualization when run because the json files it calls no longer exist. Kept for documentation and reference.







