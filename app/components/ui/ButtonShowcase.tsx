'use client'

import Button from './Button'

/**
 * ButtonShowcase Component - Demonstrates all button variants and states
 * This component is for development/testing purposes to showcase the unified button system
 */
export default function ButtonShowcase() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-semibold text-white mb-6">Button System Showcase</h2>
      
      {/* Size Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white/80">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      {/* Primary Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white/80">Primary Variants</h3>
        <div className="flex items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" href="#demo">With Link</Button>
        </div>
      </div>

      {/* Secondary Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white/80">Secondary Variants</h3>
        <div className="flex items-center gap-4">
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" href="#demo">With Link</Button>
        </div>
      </div>

      {/* Header Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white/80">Header Variants</h3>
        <div className="flex items-center gap-4">
          <Button variant="header">Header Style</Button>
          <Button variant="header" disabled>Disabled</Button>
          <Button variant="header" href="#demo">With Link</Button>
        </div>
      </div>

      {/* Ghost Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white/80">Ghost Variants</h3>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Ghost</Button>
          <Button variant="ghost" disabled>Disabled</Button>
          <Button variant="ghost" href="#demo">With Link</Button>
        </div>
      </div>

      {/* Outline Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white/80">Outline Variants</h3>
        <div className="flex items-center gap-4">
          <Button variant="outline">Outline</Button>
          <Button variant="outline" disabled>Disabled</Button>
          <Button variant="outline" href="#demo">With Link</Button>
        </div>
      </div>

      {/* Interactive States */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white/80">Interactive States</h3>
        <div className="flex items-center gap-4">
          <Button variant="primary" onClick={() => alert('Clicked!')}>Click Me</Button>
          <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>Secondary Click</Button>
          <Button variant="header" onClick={() => alert('Header clicked!')}>Header Click</Button>
        </div>
      </div>
    </div>
  )
}
