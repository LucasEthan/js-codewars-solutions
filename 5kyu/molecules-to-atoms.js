function parseMolecule(formula) {
  let atoms = {}
  let numAtoms = 1
  let strAtoms = ""

  let elem = ""

  const addAtoms = (atoms, elem, strAtoms) => {
    const numAtoms = strAtoms ? parseInt(strAtoms) : 1
    atoms[elem] = atoms.hasOwnProperty(elem) ? atoms[elem] + numAtoms : numAtoms
  }


  for (let char of formula) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      if (elem) { 
        addAtoms(atoms, elem, strAtoms)
        strAtoms = ""
      }
      elem = char
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      elem += char
    } else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
      strAtoms += char
      
    }
  }

  addAtoms(atoms, elem, strAtoms)
  return atoms
}

console.log(parseMolecule("O1Cl5O2Na3O36O4"))