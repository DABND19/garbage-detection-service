from scripts import DirectoryParser

if __name__ == "__main__":
    model_path_container = '/content/drive/MyDrive/trash_container_dataset/model_container.pth'
    model_path_trash = '/content/drive/MyDrive/trash_container_dataset/model_trash.pth'
    source_path = 'image_source'
    dp = DirectoryParser(source_path, 
                         model_path_container,
                         model_path_trash)
    dp.start()