The XliffSerializer classes assist in the conversion of translation Jobs from the 
internal TranslationJob class to the open source XLIFF (v1.2 or v2.0) format.

They are used within the majority of translation providers for submitting and 
receiving translation jobs from external sources. 

### IJobSerializer

The **Xliff12Serializer** and the **Xliff20Serializer** within Translation Manager both
implement the IJobSerializer Interface : 

```
public interface IJobSerializer<TFormat>
{
    string Name { get; }
    string Format { get; }

    TranslationAttempt<TFormat> Serialize(TranslationJob job, string sourceLang, string targetLang, bool splitHtml);
    TranslationAttempt<TranslationJob> Deserialize(TFormat source, TranslationJob job, bool valuesInSource, bool matchLanguages);
}
```


### Example 
The following code, would take a TranslationJob (job) and convert it to an XLIFF
Document (in memory).

```
    var serializer = new Xliff20Serializer(logger);
    var attempt = serializer.Serialize(job, sourceCulture.Name, targetCulture.Name, false);
    if (attempt)
    { 
        // attempt.Result contains XLIFF Document. 
    }
```

Typically once a provider has the XLIFF document in memory it can stream it to the 
external service. However, if required there are also ```XliffHelper``` classes that
can stream the XLIFF to and from disk. 