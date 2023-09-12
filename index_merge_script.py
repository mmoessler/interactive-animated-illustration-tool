
# import modules
import re

# Read the content of the .txt file
with open('index_input_chunks.txt', 'r') as txt_file:
    txt_content = txt_file.read()

# Read the content of the .html file
with open('index_template.html', 'r') as html_file:
    html_content = html_file.read()

# Use regular expressions to find all html code chunks
html_chunks = re.findall(r'<html/(.*?)>', txt_content)
# Filter out any empty strings
html_chunks = [chunk.strip() for chunk in html_chunks if chunk.strip()]
# Loop over the html code chunks and insert html template
for chunk in html_chunks:
    start_marker = f"<html/{chunk}>"
    end_marker = f"<{chunk}/html>"
    html_block = txt_content.split(start_marker)[1].split(end_marker)[0]
    html_content = html_content.replace(f"<!-- {chunk} -->", html_block)

# Write the modified HTML content back to the file
with open('index.html', 'w') as output_file:
    output_file.write(html_content)
