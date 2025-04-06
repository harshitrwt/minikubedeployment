import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface OrderConfirmationProps {
  onClose: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Thank You for Your Order!
          </h2>
          
          <p className="text-gray-600 mb-6">
            We've received your order and will contact you soon with delivery details.
          </p>
          
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-800">
              Our team will call you within 30 minutes to confirm your order and arrange delivery.
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors w-full"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;