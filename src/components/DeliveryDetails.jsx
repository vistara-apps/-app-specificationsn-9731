import React from 'react';
import { MapPin, User, Phone, Package, Calendar, TruckIcon } from 'lucide-react';
import TrackingTimeline from './TrackingTimeline';
import TrackingMap from './TrackingMap';

function DeliveryDetails({ delivery }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{delivery.trackingNumber}</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Tracking Details</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <TruckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">Recipient</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">{delivery.recipient}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">Contact</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">{delivery.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Package className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">Package Type</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">{delivery.packageType}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">Destination</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">{delivery.destination}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">Estimated Delivery</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">{delivery.estimatedDelivery}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">Driver</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">{delivery.driver}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrackingMap delivery={delivery} />
      
      <TrackingTimeline timeline={delivery.timeline} />
    </div>
  );
}

export default DeliveryDetails;