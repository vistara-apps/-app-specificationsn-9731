import React, { useState } from 'react';
import { MapPin, User, Phone, Package, Calendar, TruckIcon, Share2, Download, MessageCircle, Copy } from 'lucide-react';
import TrackingTimeline from './TrackingTimeline';
import TrackingMap from './TrackingMap';

function DeliveryDetails({ delivery, onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Delivery ${delivery.trackingNumber}`,
        text: `Track your delivery: ${delivery.trackingNumber}`,
        url: window.location.href,
      });
    } else {
      onShowToast('Share feature not supported on this browser', 'info');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(delivery.trackingNumber);
    setCopied(true);
    onShowToast('Tracking number copied to clipboard', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactDriver = () => {
    onShowToast(`Connecting to ${delivery.driver}...`, 'info');
  };

  const handleExport = () => {
    onShowToast('Exporting delivery details...', 'info');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 backdrop-blur-sm bg-white/95 animate-scale-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{delivery.trackingNumber}</h2>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Copy tracking number"
                title="Copy tracking number"
              >
                <Copy className={`w-4 h-4 ${copied ? 'text-success-600' : 'text-gray-400'} transition-colors`} />
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">Tracking Details</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center animate-pulse">
              <TruckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
          <button
            onClick={handleContactDriver}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105"
            aria-label="Contact driver"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Driver</span>
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all text-sm font-medium hover:shadow-md transform hover:scale-105"
            aria-label="Share tracking"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button
            onClick={handleExport}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all text-sm font-medium hover:shadow-md transform hover:scale-105"
            aria-label="Export details"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg group-hover:scale-110 transition-transform">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Recipient</p>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{delivery.recipient}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-gradient-to-br from-success-100 to-success-50 rounded-lg group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-success-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Contact</p>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{delivery.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg group-hover:scale-110 transition-transform">
                <Package className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Package Type</p>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{delivery.packageType}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Destination</p>
                <p className="font-bold text-gray-900 text-sm sm:text-base break-words">{delivery.destination}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg group-hover:scale-110 transition-transform">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Estimated Delivery</p>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{delivery.estimatedDelivery}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-lg group-hover:scale-110 transition-transform">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Driver</p>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{delivery.driver}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-slide-in" style={{ animationDelay: '100ms' }}>
        <TrackingMap delivery={delivery} />
      </div>
      
      <div className="animate-slide-in" style={{ animationDelay: '200ms' }}>
        <TrackingTimeline timeline={delivery.timeline} />
      </div>
    </div>
  );
}

export default DeliveryDetails;