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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Active Deliveries</h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">{deliveries.length} packages</p>
      </div>
      
      <div className="divide-y divide-gray-200 max-h-[calc(100vh-300px)] overflow-y-auto">
        {deliveries.length === 0 ? (
          <div className="p-8 text-center">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">No deliveries found</p>
          </div>
        ) : (
          deliveries.map((delivery) => (
            <button
              key={delivery.id}
              onClick={() => onSelectDelivery(delivery)}
              className={`w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors ${
                selectedDelivery?.id === delivery.id ? 'bg-primary-50 border-l-4 border-l-primary-600' : ''
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`p-2 sm:p-3 rounded-lg ${getStatusColor(delivery.status)} border`}>
                  {getStatusIcon(delivery.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{delivery.recipient}</p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">{delivery.trackingNumber}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(delivery.status)}`}>
                      {getStatusText(delivery.status)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{delivery.destination}</span>
                  </div>
                  
                  {delivery.status === 'in-transit' && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{delivery.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div 
                          className="bg-primary-600 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                          style={{ width: `${delivery.progress}%` }}
                        />
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