from importlib.metadata import distribution
from pathlib import Path

kernel_distribution = distribution("jupyterlite-pyodide-kernel")
kernel_extension_manifest = next(
    (
        path
        for path in kernel_distribution.files or ()
        if path.name == "package.json" and "pyodide-kernel-extension" in path.parts
    ),
    None,
)

if kernel_extension_manifest is None:
    raise RuntimeError("The installed Pyodide kernel frontend extension was not found.")

kernel_extension = Path(kernel_distribution.locate_file(kernel_extension_manifest)).resolve()

c.LiteBuildConfig.ignore_sys_prefix = True
c.LiteBuildConfig.federated_extensions = [str(kernel_extension.parent)]
