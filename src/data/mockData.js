export const mockDeliveries = [
  {
    id: 1,
    trackingNumber: 'ADL-2024-001234',
    recipient: 'John Smith',
    phone: '+1 (555) 123-4567',
    destination: '123 Main Street, New York, NY 10001',
    currentLocation: 'Distribution Center, Brooklyn',
    status: 'in-transit',
    progress: 65,
    estimatedDelivery: 'Today, 3:30 PM',
    packageType: 'Standard Package',
    driver: 'Michael Johnson',
    eta: '25 mins',
    timeline: [
      {
        title: 'Package Delivered',
        description: 'Package successfully delivered to recipient',
        time: '',
        status: 'pending',
        location: ''
      },
      {
        title: 'Out for Delivery',
        description: 'Package is on the delivery vehicle',
        time: 'Today, 1:45 PM',
        status: 'current',
        location: 'Distribution Center, Brooklyn'
      },
      {
        title: 'In Transit',
        description: 'Package arrived at distribution center',
        time: 'Today, 10:30 AM',
        status: 'completed',
        location: 'Brooklyn Distribution Center'
      },
      {
        title: 'Picked Up',
        description: 'Package picked up from sender',
        time: 'Today, 8:15 AM',
        status: 'completed',
        location: 'Manhattan Pickup Point'
      },
      {
        title: 'Order Placed',
        description: 'Delivery order created',
        time: 'Yesterday, 4:20 PM',
        status: 'completed',
        location: 'Online'
      }
    ]
  },
  {
    id: 2,
    trackingNumber: 'ADL-2024-001235',
    recipient: 'Sarah Williams',
    phone: '+1 (555) 234-5678',
    destination: '456 Oak Avenue, Los Angeles, CA 90001',
    currentLocation: 'Warehouse, Los Angeles',
    status: 'pending',
    progress: 0,
    estimatedDelivery: 'Tomorrow, 2:00 PM',
    packageType: 'Express Package',
    driver: 'Not assigned',
    eta: 'N/A',
    timeline: [
      {
        title: 'Package Delivered',
        description: 'Package successfully delivered to recipient',
        time: '',
        status: 'pending',
        location: ''
      },
      {
        title: 'Out for Delivery',
        description: 'Package is on the delivery vehicle',
        time: '',
        status: 'pending',
        location: ''
      },
      {
        title: 'In Transit',
        description: 'Package arrived at distribution center',
        time: '',
        status: 'pending',
        location: ''
      },
      {
        title: 'Picked Up',
        description: 'Package picked up from sender',
        time: '',
        status: 'pending',
        location: ''
      },
      {
        title: 'Order Placed',
        description: 'Delivery order created',
        time: 'Today, 9:00 AM',
        status: 'current',
        location: 'Online'
      }
    ]
  },
  {
    id: 3,
    trackingNumber: 'ADL-2024-001236',
    recipient: 'Robert Davis',
    phone: '+1 (555) 345-6789',
    destination: '789 Pine Road, Chicago, IL 60601',
    currentLocation: 'Delivered',
    status: 'delivered',
    progress: 100,
    estimatedDelivery: 'Delivered',
    packageType: 'Standard Package',
    driver: 'Emily Brown',
    eta: 'Delivered',
    timeline: [
      {
        title: 'Package Delivered',
        description: 'Package successfully delivered to recipient',
        time: 'Yesterday, 4:30 PM',
        status: 'completed',
        location: '789 Pine Road, Chicago'
      },
      {
        title: 'Out for Delivery',
        description: 'Package is on the delivery vehicle',
        time: 'Yesterday, 2:15 PM',
        status: 'completed',
        location: 'Chicago Distribution Center'
      },
      {
        title: 'In Transit',
        description: 'Package arrived at distribution center',
        time: 'Yesterday, 11:00 AM',
        status: 'completed',
        location: 'Chicago Distribution Center'
      },
      {
        title: 'Picked Up',
        description: 'Package picked up from sender',
        time: 'Yesterday, 9:30 AM',
        status: 'completed',
        location: 'Chicago Pickup Point'
      },
      {
        title: 'Order Placed',
        description: 'Delivery order created',
        time: '2 days ago, 3:45 PM',
        status: 'completed',
        location: 'Online'
      }
    ]
  },
  {
    id: 4,
    trackingNumber: 'ADL-2024-001237',
    recipient: 'Jennifer Martinez',
    phone: '+1 (555) 456-7890',
    destination: '321 Elm Street, Houston, TX 77001',
    currentLocation: 'Sorting Facility, Houston',
    status: 'in-transit',
    progress: 45,
    estimatedDelivery: 'Today, 5:00 PM',
    packageType: 'Fragile Package',
    driver: 'David Wilson',
    eta: '3 hours',
    timeline: [
      {
        title: 'Package Delivered',
        description: 'Package successfully delivered to recipient',
        time: '',
        status: 'pending',
        location: ''
      },
      {
        title: 'Out for Delivery',
        description: 'Package is on the delivery vehicle',
        time: '',
        status: 'pending',
        location: ''
      },
      {
        title: 'In Transit',
        description: 'Package arrived at distribution center',
        time: 'Today, 11:20 AM',
        status: 'current',
        location: 'Houston Sorting Facility'
      },
      {
        title: 'Picked Up',
        description: 'Package picked up from sender',
        time: 'Today, 7:45 AM',
        status: 'completed',
        location: 'Houston Pickup Point'
      },
      {
        title: 'Order Placed',
        description: 'Delivery order created',
        time: 'Yesterday, 6:10 PM',
        status: 'completed',
        location: 'Online'
      }
    ]
  },
  {
    id: 5,
    trackingNumber: 'ADL-2024-001238',
    recipient: 'Thomas Anderson',
    phone: '+1 (555) 567-8901',
    destination: '654 Maple Drive, Phoenix, AZ 85001',
    currentLocation: 'Local Depot, Phoenix',
    status: 'in-transit',
    progress: 80,
    estimatedDelivery: 'Today, 4:15 PM',
    packageType: 'Express Package',
    driver: 'Lisa Taylor',
    eta: '45 mins',
    timeline: [
      {
        title: 'Package Delivered',
        description: 'Package successfully delivered to recipient',
        time: '',
        status: 'pending',
        location: ''
      },
      {
        title: 'Out for Delivery',
        description: 'Package is on the delivery vehicle',
        time: 'Today, 2:30 PM',
        status: 'current',
        location: 'Phoenix Local Depot'
      },
      {
        title: 'In Transit',
        description: 'Package arrived at distribution center',
        time: 'Today, 9:15 AM',
        status: 'completed',
        location: 'Phoenix Distribution Center'
      },
      {
        title: 'Picked Up',
        description: 'Package picked up from sender',
        time: 'Today, 6:30 AM',
        status: 'completed',
        location: 'Phoenix Pickup Point'
      },
      {
        title: 'Order Placed',
        description: 'Delivery order created',
        time: 'Yesterday, 5:00 PM',
        status: 'completed',
        location: 'Online'
      }
    ]
  }
];