package com.kma.libraby.service.utils;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.util.SerializationUtils;


public class SystemUtils {//chứa các function dùng chung hệ thống

    public static String serializeData(String original){
        byte[] input = SerializationUtils.serialize((original));
        return Base64.encodeBase64String(input);
    }

    public static String deserializeData(String encrypted){
        try{
            boolean isBase64 = Base64.isBase64(encrypted);
            if (isBase64){
                byte[]decodeOutput = Base64.decodeBase64(encrypted);
                return (String) SerializationUtils.deserialize(decodeOutput);
            }
            return encrypted;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
