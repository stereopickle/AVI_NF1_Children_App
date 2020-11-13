class CreateAvatars < ActiveRecord::Migration[6.0]
  def change
    create_table :avatars do |t|
      t.string :avatar_name
      t.date :a_birthdate
      t.integer :a_happiness

      t.timestamps
    end
  end
end
