import { useState, useEffect } from 'react'

interface ApiResponse {
  id: number;
  payType: number;
  type: number;
  status: number;
  serviceId: number;
  duration: number;
  name: string;
  nameEn: string | null;
  description: string;
  beginDate: string;
  endDate: string;
  nextServiceId: number;
  nextServiceName: string | null;
  priceOrigin: number;
  price: number;
  percent: number;
  priceTax: number;
  priceTotal: number;
  actualPayAmount: number;
  googleProductPrice: number;
  iosIapPrice: number;
  unit: string;
  isCanceled: number;
  isFavorite: boolean;
  freeTrialStatus: number;
  isPromotionCancel: boolean;
  isSubscription: boolean;
  cancelEnabled: boolean;
  scope: number[];
  partner: string | null;
}


function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then((data : ApiResponse ) => setApiResponse(data))
  }, [])

  return (
    <div>
      <h1>API Response:</h1>
      {apiResponse ? (
        <pre>{JSON.stringify(apiResponse.name, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App