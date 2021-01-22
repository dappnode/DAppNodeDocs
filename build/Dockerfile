FROM ubuntu:latest

# Python and gitsetup
RUN apt-get update && apt-get install -y git && apt-get install -y python3 && apt-get install -y python3-pip

# Clone repo
RUN git clone https://github.com/dappnode/DAppNodeDocs.git && cd DAppNodeDocs

WORKDIR /DAppNodeDocs/

# Edit mkdocs.yml to expose at port 8080
RUN echo "dev_addr: '0.0.0.0:8080'" >> mkdocs.yml

# Install requirements
RUN pip3 install -r requirements.txt

EXPOSE 8080

CMD ["mkdocs", "serve"]