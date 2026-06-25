A Translation property is a representation of a single property within an Umbraco
content node, it contains all the information required to translate a property.

Properties may be simple or complex and contain one or more [translation values](TranslationValue)

```
public class TranslationProperty
{
    public int Id { get; set; }
    public Guid NodeKey { get; set; }
    public string Alias { get; set; }

    public string Group { get; set; }
    public int SortOrder { get; set; }

    public TranslationValue Source { get; set; }
    public TranslationValue Target { get; set; }
}
```