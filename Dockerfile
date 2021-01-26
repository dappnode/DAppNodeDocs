FROM ubuntu:latest

WORKDIR /DAppNodeDocs/

# Python
RUN apt-get update && apt-get install -y python3 python3-pip

# Install requirements
COPY requirements.txt .
RUN pip3 install -r requirements.txt

# Copy source
COPY . .

# Edit mkdocs.yml to expose at port 8080
RUN echo "dev_addr: '0.0.0.0:8080'" >> mkdocs.yml

EXPOSE 8080

CMD ["mkdocs", "serve"]