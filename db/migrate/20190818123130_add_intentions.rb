class AddIntentions < ActiveRecord::Migration[5.2]
  def change
    create_table :intentions do |t|
      t.string :K1monday
      t.string :K2monday
      t.string :K1tuesday
      t.string :K2tuesday
      t.string :K1wednesday
      t.string :K2wednesday
      t.string :K1thursday
      t.string :K2thursday
      t.string :K1friday
      t.string :K2friday
      t.string :K1saturday
      t.string :K2saturday
      t.string :K1sunday
      t.string :K2sunday
      t.string :P1monday
      t.string :P2monday
      t.string :P1tuesday
      t.string :P2tuesday
      t.string :P1wednesday
      t.string :P2wednesday
      t.string :P1thursday
      t.string :P2thursday
      t.string :P1friday
      t.string :P2friday
      t.string :P1saturday
      t.string :P2saturday
      t.string :P1sunday
      t.string :P2sunday

      t.timestamps
    end
  end
end
