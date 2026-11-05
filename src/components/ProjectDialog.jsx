import { useEffect, useRef } from 'react';

export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project) return undefined;
    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [project]);

  return (
    <dialog className="project-dialog" ref={dialogRef} onClose={onClose} aria-labelledby="project-dialog-title">
      {project ? <>
        <button className="dialog-close" type="button" aria-label="Close project details" onClick={() => dialogRef.current?.close()}>×</button>
        <p className="eyebrow">{project.number} / {project.category}</p>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p className="dialog-description">{project.description}</p>
        <h3>What it includes</h3>
        <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="dialog-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">Open live project <span>↗</span></a>
      </> : null}
    </dialog>
  );
}
