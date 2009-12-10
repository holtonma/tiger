# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_tiger_session',
  :secret      => '5bc78a9142f885ef1c90f5f3af2cbf2cb82911513d9f79c861fe633fe1ca50298456a8b9d562d99478b9af77126fa4d2fea6731754f5f74f7ebd407be37e4999'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
