# ss-rts

solid supabase rts

# Status:
- prototype

# Information:

  To develop real time strategy that is under development.

```
Types:
- turn base
- spaceship battle
- moblie base
```

  The basic package are vite, solid, supabase and other packages.

  For solid-js for javascript and html build for UI and logic. Supabase for client database

  Note is base on supabase setup from docs. Some stuff was outdate. But should simalar to react and vue that worked on.

```
```
  The logic checks will hard to deal as need to think of way since real time physics collision is not possible in some area. Either stand alone single player mode or peer to peer sandbox game match.

# Supabase Notes:
  Make sure that date format is correct type for sql else it will reject insert or update.

  Still learning the sql query. One is how to manage the access role and permissions for write, update, insert, delete and other features.
```
  postgresql
```

# .env
```
VITE_SUPABASE_URL=""
VITE_SUPABASE_ANON_KEY=""
```