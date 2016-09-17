logTitle("String templates");

var name = "Bigi";
var action = "Start"
var stringTemplateSentence = ` User ${name} has taken action ${action} !`;
var inceptionTemplateString = `What we know? "${stringTemplateSentence}"  So we can forget about user ${name}`;

log(stringTemplateSentence);
log(inceptionTemplateString);

