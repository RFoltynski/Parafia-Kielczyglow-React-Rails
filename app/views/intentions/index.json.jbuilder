json.data do
  json.kielczyglow do
    json.extract! @intention, :K1monday, :K2monday, :K1tuesday, :K2tuesday, :K1wednesday, :K2wednesday, :K1thursday, :K2thursday, :K1friday, :K2friday, :K1saturday, :K1sunday, :K2sunday;  
  end
  json.pierzyny do
    json.extract! @intention, :P1monday, :P2monday, :P1tuesday, :P2tuesday, :P1wednesday, :P2wednesday, :P1thursday, :P2thursday, :P1friday, :P2friday, :P1saturday, :P1sunday, :P2sunday;  
  end
end
