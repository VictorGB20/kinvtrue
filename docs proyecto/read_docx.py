import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def check_structure(docx_path):
    with zipfile.ZipFile(docx_path) as z:
        return z.namelist()

def get_docx_text(path):
    try:
        document_xml_path = 'word/document.xml'
        with zipfile.ZipFile(path) as docx:
            xml_content = docx.read(document_xml_path)
            tree = ET.fromstring(xml_content)
            
            # XML namespace for Word documents
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_parts = []
            # Find all text nodes (w:t)
            for node in tree.iter():
                if node.tag.endswith('}t'):
                    if node.text:
                        text_parts.append(node.text)
                elif node.tag.endswith('}p'):
                    text_parts.append('\n')
            
            return ''.join(text_parts)
    except Exception as e:
        return f"Error: {e}"


file_path = "docs/docs ia.docx"
output_path = "doc_content.txt"
if os.path.exists(file_path):
    text = get_docx_text(file_path)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Text extracted to {output_path}")
else:
    print(f"File not found: {file_path}")
