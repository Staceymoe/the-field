# The Field – GitHub Deployment

## Overview

This repo contains the full frontend + backend code for The Field portal.

## Structure

- `index.html` — breathing, animated entry portal
- `netlify/functions/join.js` — serverless function
- `netlify.toml` — Netlify build + redirect configuration

## How to Deploy

1. Push this folder to GitHub
2. Go to [Netlify → Add new site → Import from Git](https://app.netlify.com/start)
3. Connect your GitHub account
4. Select this repo
5. Netlify will auto-detect your functions and deploy

## Live URLs

- Portal: `/`
- Join route: `/.netlify/functions/join`
