from pyodide import create_proxy
import js


# Get the text
def getText(event):
    text = document.querySelector("#editText>div>textarea").value
    getTokens(text)
    return

#  Tokenize
def getTokens(text):
    lines =  text.split("\n")
    fastReader(lines)
    return


# fast bionic reader
def fastReader(lines):
    """Returns Markdown with first half of characters in the made to bold"""
    html = ""
    for l in lines:
        tokens = l.split(" ")
        html +=  ''.join(cleanText(token) for token in tokens) + "<br />"
        
        
    document.querySelector("#viewText").innerHTML =html;
  
def cleanText(word):
    length = len(word)
    middle = length // 2
    return "<b>"+word[0:middle]+"</b>"+word[middle:]+" "

#initialize dummy text
dummyText = js.window.card_data.inputText
getTokens(dummyText)
document.querySelector("#editText>div>textarea").value = dummyText


button = document.querySelector("#actionToggle>div>div>button");
button.addEventListener("click", create_proxy(getText))