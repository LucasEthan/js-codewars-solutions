function parseMolecule(formula) {
  let atoms = {}
  let numAtoms = 1
  let strAtoms = ""

  let elem = ""


  for (let char of formula) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      if (elem) { 
        numAtoms = strAtoms ? parseInt(strAtoms) : 1
        atoms[elem] = numAtoms

        strAtoms = ""
      }
      elem = char
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      elem += char
    } else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
      strAtoms += char
      
    }
  }
  atoms[elem] = strAtoms ? parseInt(strAtoms) : 1
  return atoms
}

console.log(parseMolecule("NaClO"))