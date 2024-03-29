import 'regenerator-runtime'
import CacheHelper from './tools/cache-helper'
const { assets } = global.serviceWorkerOption

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker...')
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
})

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker...')
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  console.log(event.request)
  event.respondWith(CacheHelper.revalidateCache(event.request))
})
