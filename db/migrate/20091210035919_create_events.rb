class CreateEvents < ActiveRecord::Migration
  def self.up
    create_table :events do |t|
      t.datetime :start
      t.datetime :end
      t.text :description
      t.string :title
      t.integer :duration_event
      t.timestamps
    end
  end

  def self.down
    drop_table :events
  end
end
