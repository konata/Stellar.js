const units = [
  `digraph {a -> b}`,
  `digraph PFG {
	  layout=neato 
	  "(foo@2).f1" -> "(foo@2).f2"
	  var4 [color = cyan, shape = box]
	  "(foo@1).f2" [color = yellow]
	  "(foo@1).f2" -> var4
	  "(foo@2).f2" [color = yellow]
	  "(bar@2).f2" [color = yellow]
	  "(bar@2).f1" [color = yellow]
	  "(bar@1).f1" -> var3
	  "(bar@2).f2" -> "(foo@1).f2"
	  "(bar@1).f1" [color = yellow]
	  var3 [color = cyan, shape = box]
	  var1 -> "(foo@2).f1"
	  var4 -> "(bar@2).f1"
	  "(foo@2).f2" -> "(bar@1).f1"
	  var2 -> "(foo@1).f1"
	  "(foo@1).f1" [color = yellow]
	  var1 [color = cyan, shape = box]
	  "(bar@2).f1" -> "(bar@1).f2"
	  var2 [color = cyan, shape = box]
	  "(bar@1).f2" -> var1
	  "(bar@1).f2" [color = yellow]
	  "(foo@2).f1" [color = yellow]
	  "(foo@1).f1" -> "(bar@2).f2"
  }`,
  `digraph {a -> b}`,
  `digraph PFG {
	  layout=neato 
	  "(foo@2).f1" -> "(foo@2).f2"
	  var4 [color = cyan, shape = box]
	  "(foo@1).f2" [color = yellow]
	  "(foo@1).f2" -> var4
	  "(foo@2).f2" [color = yellow]
	  "(bar@2).f2" [color = yellow]
	  "(bar@2).f1" [color = yellow]
	  "(bar@1).f1" -> var3
	  "(bar@2).f2" -> "(foo@1).f2"
	  "(bar@1).f1" [color = yellow]
	  var3 [color = cyan, shape = box]
	  var1 -> "(foo@2).f1"
	  var4 -> "(bar@2).f1"
	  "(foo@2).f2" -> "(bar@1).f1"
	  var2 -> "(foo@1).f1"
	  "(foo@1).f1" [color = yellow]
	  var1 [color = cyan, shape = box]
	  "(bar@2).f1" -> "(bar@1).f2"
	  var2 [color = cyan, shape = box]
	  "(bar@1).f2" -> var1
	  "(bar@1).f2" [color = yellow]
	  "(foo@2).f1" [color = yellow]
	  "(foo@1).f1" -> "(bar@2).f2"
  }`,
  `digraph {a -> b}`,
]

export { units }
