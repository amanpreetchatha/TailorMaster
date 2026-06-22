# TailorMaster

TailorMaster is a simple Expo-powered React Native app for local tailors to manage customer records and daily workflow.

## Overview

The app helps a tailor move from paper notes to a small digital workspace. It supports email login, customer lookup, and quick access to customer details.

## Features

- Supabase authentication for login and registration
- Customer list and search by name or phone
- Customer profile access from the dashboard
- Lightweight mobile UI built with Expo and React Native

## Tech stack

- Expo
- React Native
- Supabase
- React Native Elements
- TypeScript

## Running locally

```bash
npm install
npm run start
```

Then open the project in Expo Go or run on a simulator with `npm run android` / `npm run ios`.

## Notes

The app uses Supabase tables such as `profiles` and `customer_list`, and stores auth sessions with AsyncStorage.
