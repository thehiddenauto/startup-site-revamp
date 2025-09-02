import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      description: "Ideal for growing teams and businesses",
      features: [
        "Up to 50 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Advanced security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited team members",
        "1TB storage",
        "Real-time analytics",
        "24/7 phone support",
        "Custom development",
        "SOC 2 compliance",
        "Single sign-on (SSO)"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your team. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-elegant hover:shadow-glow transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary shadow-elegant hover:shadow-glow' 
                      : 'bg-secondary hover:bg-secondary/80'
                  } transition-all duration-300`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom plan? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;