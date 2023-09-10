The TranslationValue class is the working unit of translation within Translation Manager

Depending on the complexity of the property being represented a Single Translation Value
may contain one or more child values. 

For example in a simple text box there will be a single value and no InnerValues. For something more complex like a grid editor there might be many InnerValues representing
each row of the grid which in turn have InnerValues representing the blocks, which then
might have inner values representing the properties uses (such as rich text boxes, leblender controls, etc.).


```
    public class TranslationValue
    {
        public TranslationValue() 
        public TranslationValue(string editorAlias)
        public TranslationValue(string displayName, string editorAlias)
        public TranslationValue(string displayName, string editorAlias, int sortOrder)

        public string DisplayName { get; set; }

        public string EditorAlias { get; set; }
        public string Value { get; set; }

        public bool HtmlControl { get; set; }
        public bool Translated { get; set; }

        public int SortOrder { get; set; }

        public Dictionary<string, TranslationValue> InnerValues { get; set; }

        public bool HasChildValues()
    }
```