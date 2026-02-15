import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

function TrackingMap({ delivery }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden backdrop-blur-sm bg-white/95">
      <div className="p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-transparent">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">Live Tracking</h3>
      </div>
      
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 h-64 sm:h-80 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(37, 99, 235, 0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-4 animate-fade-in">
            <div className="relative inline-block">
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full bg-primary-400 animate-pulse opacity-30"></div>
              
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-2xl">
                <Navigation className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-success-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-4 max-w-xs mx-auto border border-white/50 animate-slide-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-primary-700 font-bold text-sm sm:text-base">{delivery.driver.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm sm:text-base">{delivery.driver}</p>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">Your delivery driver</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-left p-3 rounded-lg bg-primary-50/50">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">Current Location</p>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm break-words">{delivery.currentLocation || 'En route to destination'}</p>
                </div>
              </div>
            </div>
            
            {delivery.status === 'in-transit' && (
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-2xl px-6 py-3 inline-block animate-bounce-subtle">
                <p className="text-xs sm:text-sm text-primary-100 font-medium">Estimated arrival in</p>
                <p className="text-lg sm:text-2xl font-bold text-white">{delivery.eta || '25 mins'}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg px-3 py-2 text-xs sm:text-sm border border-white/50 animate-fade-in">
          <span className="inline-block w-2 h-2 bg-success-500 rounded-full mr-2 animate-pulse"></span>
          <span className="font-semibold text-gray-900">Live Tracking Active</span>
        </div>
      </div>
    </div>
  );
}

export default TrackingMap;