# Portfolio architecture diagrams

The flows summarize the documented systems. Open the case studies for technical details and links to each project.

## Automated visual inspection

```mermaid
flowchart LR
    Image["Inspection image"] --> Detection["YOLO detection"]
    Detection --> Segmentation["U-Net segmentation"]
    Segmentation --> Quality["Quality assessment"]
    MLOps["MLflow training and monitoring"] -.-> Detection
    MLOps -.-> Segmentation
```

## Morocco Climate & Water Observatory

```mermaid
flowchart LR
    Sources["CHIRPS, ERA5-Land, OpenStreetMap"] --> Landing["MinIO landing"]
    Landing --> Bronze["Spark / Delta Bronze"]
    Bronze --> Silver["Silver validation"]
    Silver --> Gold["dbt Gold models"]
    Gold --> Dashboards["Power BI and Streamlit"]
    Airflow["Airflow orchestration"] -.-> Bronze
```

## Vision Studio

```mermaid
flowchart LR
    Cameras["USB, IP, or industrial camera"] --> Camera["Camera adapters"]
    Camera --> Adapters["Model adapters"]
    Adapters --> Inference["Inference and project rules"]
    Inference --> Monitor["Live monitoring"]
    Inference --> Review["Low-confidence review"]
```

## Stress Peak Detection from EEG

```mermaid
flowchart LR
    EEG["Multichannel EEG"] --> Filter["Bandpass and notch filtering"]
    Filter --> Clean["Optional ICA artifact removal"]
    Clean --> Downsample["Downsampling"]
    Downsample --> Features["Time and frequency features"]
```

## Agents for Agriculture

```mermaid
flowchart LR
    PDFs["Technical documents"] --> Index["Semantic chunks and indexes"]
    Index --> Retrieval["Hybrid search and graph traversal"]
    Retrieval --> Evidence["Reranked evidence"]
    Evidence --> Response["Cited response"]
    Agents["Specialist agents"] --> Response
```

## Explainable IoT Intrusion Detection

```mermaid
flowchart LR
    Dataset["CIC IIoT traffic windows"] --> Features["Feature engineering and selection"]
    Features --> Model["CNN–BiLSTM–Transformer"]
    Model --> Metrics["Classification metrics and latency"]
    Model --> Explanations["SHAP explanations"]
```

## Finance ETL on Google Cloud

```mermaid
flowchart LR
    Data["Invoices and support events"] --> Validation["Validation and deduplication"]
    Validation --> Quarantine["Quarantine"]
    Validation --> Warehouse["Warehouse models and marts"]
    Warehouse --> Analytics["Finance and support analytics"]
```
