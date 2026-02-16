from setuptools import setup, find_packages

setup(
    name='apiverve_usbvendorlookup',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='USB Vendor Lookup allows you to identify USB device manufacturers and products by their vendor ID and product ID. It uses the Linux USB ID Repository, which contains thousands of USB vendor and product identifiers.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/usbvendorlookup?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
