function bandNamesSort(bandNames) {
    function customSort(a, b) {
      const aName = a.replace(/^(The|A|An)\s+/i, ''); // Remove leading articles from a
      const bName = b.replace(/^(The|A|An)\s+/i, ''); // Remove leading articles from b
      return aName.localeCompare(bName);
    }
  
    return bandNames.sort(customSort);
  }
  
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]))
  