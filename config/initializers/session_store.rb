# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_tiger_session',
  :secret      => 'f8806676078c9eb38a22af3c6145a3310212140e26530f5ca05e6e710ef4470fe0062a6fb542035fa8a12c0a48f8427737db29228a1960bdec27c5a35b1f44a0'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
