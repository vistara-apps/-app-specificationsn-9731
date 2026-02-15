import React from 'react';
import { Package, Clock, CheckCircle, TruckIcon } from 'lucide-react';

function DeliveryList({ deliveries, selectedDelivery, onSelectDelivery }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'in-transit':
        return <TruckIcon className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Package className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in-transit':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden backdrop-blur-sm bg-white/95">
      <div className="p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-transparent">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Active Deliveries</h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
          {deliveries.length} {deliveries.length === 1 ? 'package' : 'packages'}
        </p>
      </div>
      
      <div className="divide-y divide-gray-200 max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
        {deliveries.length === 0 ? (
          <div className="p-8 sm:p-12 text-center animate-fade-in">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 font-medium">No deliveries found</p>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your search or filter</p>
          </div>
        ) : (
          deliveries.map((delivery, index) => (
            <button
              key={delivery.id}
              onClick={() => onSelectDelivery(delivery)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`w-full p-4 sm:p-6 text-left hover:bg-gradient-to-r hover:from-primary-50 hover:to-transparent transition-all duration-200 group animate-slide-in ${
                selectedDelivery?.id === delivery.id 
                  ? 'bg-gradient-to-r from-primary-50 to-transparent border-l-4 border-l-primary-600 shadow-inner' 
                  : 'hover:shadow-sm'
              }`}
              aria-label={`View details for delivery ${delivery.trackingNumber}`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`p-2 sm:p-3 rounded-xl ${getStatusColor(delivery.status)} border transform transition-transform group-hover:scale-105`}>
                  {getStatusIcon(delivery.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm sm:text-base truncate">{delivery.recipient}</p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate font-mono">{delivery.trackingNumber}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(delivery.status)} shadow-sm`}>
                      {getStatusText(delivery.status)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Package className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{delivery.destination}</span>
                  </div>
                  
                  {delivery.status === 'in-transit' && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1.5 font-medium">
                        <span>Progress</span>
                        <span className="font-bold text-primary-600">{delivery.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                        <div 
                          className="bg-gradient-to-r from-primary-600 to-primary-500 h-2 rounded-full transition-all duration-500 relative overflow-hidden"
                          style={{ width: `${delivery.progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default DeliveryList;