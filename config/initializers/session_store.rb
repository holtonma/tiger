# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_tiger_session',
  :secret      => '3196843156b74650a4f51d982dc01ffaf26e459ba211f1deefbc5b573ecf98f789539a1bb2f1c2f91a06abd0b51f5e479ac13ad2e572210d3eeb4b53f03674e5'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
