# interactive-animated-illustration-tool

## Introduction

This is a template to create an illustration tool similar to,

```

https://raw.githack.com/mmoessler/illustration-statistical-concepts/main/index.html

```

## Content

### Working with the Template

1. Create a folder named "figures" with all the figures that you want to use
2. Open the input_chunks.txt file - Each Section starts with e.g., <py/NAME> and ends with e.g., <NAME/py>
3. Change the content in each section accordingly and save the input_chunks.txt file
4. Run the merge_script.py file. A html_output file is created.

#### Example: Adding an additional slider 

1. Under slider, add a new slider with labels and values in the following form: "slider1": [1, 2, 3],
2. The "initialIndex" function sets the initial index position of the slider when they are first displayed. Note, that the first index value is counted from 0. If we want to display the value 2 as default, we would need to set the index value to 1.
3. Next, add the labels for the slider and the button, which are displayed in the final file
4. Now, enter the index of the last slider input value you defined previously in Step 1 under slider_value_max. 
5. Enter the index of the default value you want to display. 
6. Save the input_chunks.txt file and run the merge_script.py file.

Changing or adding Text Chunks or Audio text Chunks works similarly.

## Steps

...



## Licence

This project is part of the [DeLLFi](https://www.uni-hohenheim.de/en/project-dellfi) (Integrating digitalization along teaching, learning, and research) project of the University of Hohenheim and funded by [Foundation for Innovation in University Teaching](https://stiftung-hochschullehre.de/)

The materials may be used and further developed for teaching purposes with credit to the author and funding and under the terms of the license (see below).

<hr>

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
</a>

<br />

This work is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
</a>.