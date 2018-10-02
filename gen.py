# -*- coding: utf-8 -*-
"""
Created on Fri Sep 28 16:38:51 2018

@author: Me
"""

from jinja2 import Environment, FileSystemLoader
import csv

class Image:
    name = ""
    date = ""
    tags = ""
    def __init__(self, var1, var2, var3):
            self.name = var1
            self.date = var2
            self.tags = var3  

images = []
with open('./images/Photography/00data.csv') as f:
    reader = csv.reader(f)
    for row in reader:
        images.append(Image(row[0],row[1],row[2]))

outFile = open("photography.html","w")
file_loader = FileSystemLoader('templates')
env = Environment(loader=file_loader)
template = env.get_template('photography_galleryitems.html')
output = template.render (images=images)
outFile.write(output)
outFile.close()

Files = ["index.html", "climbing.html", "professional.html", "bio.html", "art.html", "projects.html"]
for f in Files:
    outFile = open(f,"w")
    template = env.get_template(f)
    output = template.render ()
    outFile.write(output)
    outFile.close()
