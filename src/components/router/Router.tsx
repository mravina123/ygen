import { useEffect, useState } from 'react';
import { HomePage } from '../pages/HomePage';
import { SuitePage } from '../pages/SuitePage';
import { FinanceAgentPage } from '../pages/FinanceAgentPage';
import { SalesAgentPage } from '../pages/SalesAgentPage';
import { InventoryAgentPage } from '../pages/InventoryAgentPage';
import { IntegrationAgentPage } from '../pages/IntegrationAgentPage';
import { OutcomesPage } from '../pages/OutcomesPage';
import { PricingPage } from '../pages/PricingPage';
import { PartnersPage } from '../pages/PartnersPage';
import { SecurityPage } from '../pages/SecurityPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';

// Simple client-side router
export function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle navigation
  const navigate = (path: string) => {
    try {
      if (typeof path === 'string' && path.startsWith('/')) {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
      } else {
        console.warn('Invalid navigation path:', path);
      }
    } catch (error) {
      console.error('Error navigating to path:', path, error);
    }
  };

  // Update global navigation function
  useEffect(() => {
    (window as any).navigate = navigate;
  }, []);

  // Route matching
  const renderPage = () => {
    try {
      switch (currentPath) {
        case '/':
          return <HomePage />;
        case '/ascent-agents':
          return <SuitePage />;
        case '/products/finance-agent':
          return <FinanceAgentPage />;
        case '/products/sales-agent':
          return <SalesAgentPage />;
        case '/products/inventory-agent':
          return <InventoryAgentPage />;
        case '/products/integration-agent':
          return <IntegrationAgentPage />;
        case '/outcomes':
          return <OutcomesPage />;
        case '/pricing':
          return <PricingPage />;
        case '/partners':
          return <PartnersPage />;
        case '/security':
          return <SecurityPage />;
        case '/about':
          return <AboutPage />;
        case '/contact':
          return <ContactPage />;
        // Add more routes as needed
        default:
          return <HomePage />; // Fallback to home
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      return <HomePage />; // Fallback to home on error
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Ensure scroll happens after page render
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }, [currentPath]);

  // Set SEO for each page
  useEffect(() => {
    const updateSEO = () => {
      try {
        switch (currentPath) {
        case '/':
          document.title = 'yGen Innovations — The Y-Axis Company: Ascent Agents for Real-World Results';
          updateMetaDescription('Governed, system-agnostic Agentic AI companions that convert Explain → Act → Insight across Finance, Sales, Inventory, and Integrations.');
          break;
        case '/ascent-agents':
          document.title = 'Ascent Agents Suite — Agentic AI by yGen';
          updateMetaDescription('A governed, system-agnostic suite of AI companions for Finance, Sales, Inventory, and Integration');
          break;
        case '/products/finance-agent':
          document.title = 'Finance Agent — Ascent Agents | yGen';
          updateMetaDescription('Reduce AR days and automate reconciliations with governed, system-agnostic Agentic AI.');
          break;
        case '/products/sales-agent':
          document.title = 'Sales Agent — Ascent Agents | yGen';
          updateMetaDescription('Governed Agentic AI for healthier pipelines and better close rates.');
          break;
        case '/products/inventory-agent':
          document.title = 'Inventory Agent — Ascent Agents | yGen';
          updateMetaDescription('Reduce stockouts and carrying costs with governed Agentic AI.');
          break;
        case '/products/integration-agent':
          document.title = 'Integration Agent — Ascent Agents | yGen';
          updateMetaDescription('Governed, system‑agnostic integration companion for faster, safer flows.');
          break;
        case '/outcomes':
          document.title = 'Business Outcomes — Ascent Agents | yGen';
          updateMetaDescription('Measurable business impact across industries with governed Agentic AI. See KPIs and ROI from pilot programs.');
          break;
        case '/pricing':
          document.title = 'Pricing — Ascent Agents | yGen';
          updateMetaDescription('Simple, transparent pricing for governed Agentic AI. Coming October 2024. Try Free and lock early-access perks.');
          break;
        case '/partners':
          document.title = 'Partners — Founding Partners Program | yGen';
          updateMetaDescription('Join the exclusive Founding Partners program. Be one of ten partners shaping the Ascent Agents Suite. Apply now.');
          break;
        case '/security':
          document.title = 'Security & Governance — Ascent Agents | yGen';
          updateMetaDescription('Governance by default. Built on Azure with human-in-the-loop controls, audit trails, and enterprise-grade security.');
          break;
        case '/about':
          document.title = 'About — yGen Innovations';
          updateMetaDescription('Built to build your Y-axis. Meet founders Mel & Patrick Yuson and our mission to bring AI companions to PH, SG, and US.');
          break;
        case '/contact':
          document.title = 'Contact — yGen Innovations';
          updateMetaDescription('Ready to ascend with AI? Get started with yGen\'s Agentic AI companions. Contact us to transform your business operations.');
          break;
        default:
          document.title = 'yGen Innovations — The Y-Axis Company: Ascent Agents for Real-World Results';
          updateMetaDescription('Governed, system-agnostic Agentic AI companions that convert Explain → Act → Insight across Finance, Sales, Inventory, and Integrations.');
      }
      } catch (error) {
        console.error('Error updating SEO:', error);
      }
    };

    const updateMetaDescription = (content: string) => {
      try {
        if (typeof document !== 'undefined') {
          let metaDescription = document.querySelector('meta[name="description"]');
          if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
          }
          metaDescription.setAttribute('content', content);
        }
      } catch (error) {
        console.error('Error updating meta description:', error);
      }
    };

    updateSEO();
  }, [currentPath]);

  return renderPage();
}