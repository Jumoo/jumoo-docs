
Referenced within the [ITranslationProvider](ITranslationProvider) to provide
locations of any angular views used within the provider.

```
public class TranslationProviderViews
{
    public string Config { get; set; }
    public string Pending { get; set; }
    public string Submitted { get; set; }
    public string Approved { get; set; }
}
```

Paths to providers would be relative to the root of the site e.g ```/App_Plugins/TranslateProvider.SimpleFile/config.html```
