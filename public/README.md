# Resume Placeholder

To enable resume downloads:

1. Add your resume PDF file as `resume.pdf` in the `public` folder
2. The download button in the Hero section will automatically work

Alternatively, you can update the path in `components/Hero.tsx`:

```tsx
<button
  onClick={() => window.open('/your-resume-name.pdf', '_blank')}
  // ...
>
```

Or link to an external URL:

```tsx
<button
  onClick={() => window.open('https://yourwebsite.com/resume.pdf', '_blank')}
  // ...
>
```
