import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { CreditCard } from "lucide-react";
import NewCardDialog from "./NewCardDialog";

const plans = {
  monthly: [
    {
      id: "regular",
      name: "Regular",
      price: "$99.99",
      period: "/mo",
      description: "Price for 1-50 unit",
    },
    {
      id: "platinum",
      name: "Platinum",
      price: "$129.99",
      period: "/mo",
      description: "Price for 1-50 unit",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$199.99",
      period: "/mo",
      description: "Price for 1-50 unit",
    },
  ],
  annually: [
    {
      id: "regular",
      name: "Regular",
      price: "$1079.99",
      period: "/yr",
      description: "Price for 1-50 unit",
    },
    {
      id: "platinum",
      name: "Platinum",
      price: "$1399.99",
      period: "/yr",
      description: "Price for 1-50 unit",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$2159.99",
      period: "/yr",
      description: "Price for 1-50 unit",
    },
  ],
};

const paymentMethods = [
  {
    id: 1,
    name: "Alex Jones(Amex card)",
    cardNumber: "••••••••8565",
  },
  {
    id: 2,
    name: "Alex Jones(Amex card)",
    cardNumber: "••••••••8565",
  },
  {
    id: 3,
    name: "Alex Jones(Amex card)",
    cardNumber: "••••••••8565",
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("regular");
  const [activeTab, setActiveTab] = useState("monthly");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);

  const handlePlanClick = (planId) => {
    setSelectedPlan(planId);
  };

  const handlePaymentMethodSelect = (methodId) => {
    setSelectedPaymentMethod(methodId);
  };

  // const currentPlans = plans[activeTab];

  return (
    <div className="w-full conatiner mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          Chose a plan for after 30-days free trial
        </h1>

        <Tabs
          defaultValue="monthly"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="bg-white min-h-14 border border-stock p-1.5">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annually">Annually (save 57%)</TabsTrigger>
          </TabsList>

          {/* monthly tab */}
          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {plans["monthly"].map((plan) => (
                <Card
                  key={plan.id}
                  className={`cursor-pointer ${
                    selectedPlan === plan.id
                      ? "border-2 border-blue-500 bg-[#F5F8FF]"
                      : "border border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  onClick={() => handlePlanClick(plan.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold border border-stock py-3 px-4 rounded-[6px]">
                        {plan.name}
                      </CardTitle>
                      {selectedPlan === plan.id && (
                        <div className="flex items-center space-x-2 border border-stock py-3 px-4 rounded-[12px]">
                          <Checkbox
                            id={`autopay-${plan.id}`}
                            checked={true}
                            className="data-[state=checked]:border-blue-500 data-[state=checked]:text-blue-500"
                          />
                          <label
                            htmlFor={`autopay-${plan.id}`}
                            className="text-base font-bold text-blue-500 cursor-pointer"
                          >
                            Auto Pay
                          </label>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-500 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* anually tab */}
          <TabsContent value="annually">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {plans["annually"].map((plan) => (
                <Card
                  key={plan.id}
                  className={`cursor-pointer ${
                    selectedPlan === plan.id
                      ? "border-2 border-blue-500 bg-[#F5F8FF]"
                      : "border border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  onClick={() => handlePlanClick(plan.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold border border-stock py-3 px-4 rounded-[6px]">
                        {plan.name}
                      </CardTitle>
                      {selectedPlan === plan.id && (
                        <div className="flex items-center space-x-2 border border-stock py-3 px-4 rounded-[12px]">
                          <Checkbox
                            id={`autopay-${plan.id}`}
                            checked={true}
                            className="data-[state=checked]:border-blue-500 data-[state=checked]:text-blue-500"
                          />
                          <label
                            htmlFor={`autopay-${plan.id}`}
                            className="text-base font-bold text-blue-500 cursor-pointer"
                          >
                            Auto Pay
                          </label>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-500 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Payment Options Section */}
      <div className="mt-12 rounded-lg shadow-custom">
        <div className="flex items-center justify-between mb-6 pt-4 px-4">
          <h2 className="text-xl font-bold">Payment option</h2>
          <NewCardDialog open={openDialog} setOpen={setOpenDialog} />
        </div>

        <div className="">
          {paymentMethods.map((method, index) => (
            <div
              key={method.id}
              className={`flex items-center justify-between p-4 bg-white ${
                index === paymentMethods?.length - 1 ? "" : "border-b"
              } border-[#F0F1F3] hover:border-gray-300 transition-colors`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-6 bg-gray-100 rounded border flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <span className="text-gray-700 font-medium">
                    {method.name}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {method.cardNumber}
                  </span>
                </div>
              </div>
              <Button
                variant={
                  selectedPaymentMethod === method.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => handlePaymentMethodSelect(method.id)}
                className={
                  selectedPaymentMethod === method.id
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border-blue-500 text-blue-500 hover:bg-blue-50"
                }
              >
                Select
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
