import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

function TrackingMap({ delivery }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Live Tracking</h3>
      </div>
      
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 h-64 sm:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-4">
            <div className="relative inline-block">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-600 rounded-full flex items-center justify-center animate-pulse">
                <Navigation className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold text-sm sm:text-base">{delivery.driver.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{delivery.driver}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Your delivery driver</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-left">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-600">Current Location</p>
                  <p className="font-medium text-gray-900 text-xs sm:text-sm break-words">{delivery.currentLocation || 'En route to destination'}</p>
                </div>
              </div>
            </div>
            
            {delivery.status === 'in-transit' && (
              <div className="bg-white rounded-lg shadow-lg px-4 py-2 inline-block">
                <p className="text-xs sm:text-sm text-gray-600">Estimated arrival in</p>
                <p className="text-lg sm:text-xl font-bold text-primary-600">{delivery.eta || '25 mins'}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-3 py-2 text-xs sm:text-sm">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Live Tracking Active
        </div>
      </div>
    </div>
  );
}

export default TrackingMap;