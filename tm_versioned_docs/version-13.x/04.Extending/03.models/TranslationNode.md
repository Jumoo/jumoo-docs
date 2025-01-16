A Translation Node is a representation of a single content node that requires
translation - it contains the ids of the master and target content nodes within
umbraco, and a collection of PropertyGroups (which relate to tabs within umbraco)

Within these propertyGroups are the [TranslationProperties](TranslationProperty)


```
public class TranslationNode
{
    public int Id { get; set; }
    public Guid Key { get; set; }
    public Guid SetKey { get; set; }

    public CultureInfoView Culture { get; set; }

    public int MasterNodeId { get; set; }
    public int TargetNodeId { get; set; }

    public NodeStatus Status { get; set; }

    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }

    public string MasterNodeName { get; set; }
    public string TargetNodeName { get; set; }
    public string MasterNodePath { get; set; }
    public string TargetNodePath { get; set; }

    public bool IsDictionary { get; set; }

    public List<TranslationPropertyGroup> Groups { get; set; }

    public void AddProperty(string groupName, string alias, TranslationValue source,
        TranslationValue target)

    public void AddProperty(TranslationProperty property)

    public bool HasOpenSiblings { get; set; }
}   
```